import tkinter as tk

class TuringMachineSimulator:
    def __init__(self, root):
        self.root = root
        self.root.title("Máquina de Turing Simulada")

        self.cinta = [" "," "," "," ","0", "1", "0", "1", "0", "1", "0","1"," "," "," "," "]
        self.head_position = 0

        

        self.frame_cinta = tk.Frame(root)
        self.frame_cinta.pack()

        self.cells = [tk.Label(self.frame_cinta, text=char, font=("Courier", 20), width=2, borderwidth=1, relief="solid") for char in self.cinta]
        for cell in self.cells:
            cell.pack(side="left")

        self.label_head = tk.Label(root, text="▲", font=("Courier", 15))
        self.indice_cinta=self.position_head_sycronized()
        self.label_head.place(x=self.indice_cinta, y=38)  # Posición inicial de la cabeza

        self.step_delay = 1000  # Intervalo de tiempo en milisegundos
        self.auto_step()
        

    def position_head_sycronized(self):
        for i in range(len(self.cinta)):
            if self.cinta [i] != " ":
                return i
                
                
    

    def auto_step(self):
        current_symbol = self.cinta[self.head_position]
        if current_symbol == '0':
            self.cinta[self.head_position] = '1'
            self.head_position += 1
        else:
            if current_symbol == '1':
                self.cinta[self.head_position] = '0'
                self.head_position += 1


        # Actualiza el texto en las celdas
        for i in range(len(self.cinta)):
            self.cells[i].config(text=self.cinta[i])

        # Mueve la cabeza hacia abajo
        self.label_head.place(x=self.indice_cinta +36 * self.head_position, y=38)

        # Programa el siguiente paso automático
        self.root.after(self.step_delay, self.auto_step)
        cell_coordinates = [cell.winfo_x() for cell in self.cells]
        print("Coordenadas X de las celdas:", cell_coordinates)


if __name__ == "__main__":
    root = tk.Tk()
    # Establecemos el tamaño mínimo
    root.minsize(1200, 600)

    # Establecemos el tamaño máximo
    root.maxsize(1200, 600)
    app = TuringMachineSimulator(root)
    root.mainloop()
