import tkinter as tk

class TuringMachineSimulator:
    def __init__(self, root):
        self.root = root
        self.root.title("Máquina de Turing Simulada")

        self.cinta = ["0", "1", "0", "1", "0", "1", "0"]
        self.head_position = 0

        self.frame_cinta = tk.Frame(root)
        self.frame_cinta.pack()

        self.cells = [tk.Label(self.frame_cinta, text=char, font=("Courier", 20), width=2, borderwidth=1, relief="solid") for char in self.cinta]
        for cell in self.cells:
            cell.pack(side="left")

        self.label_head = tk.Label(root, text="▲", font=("Courier", 15))
        self.label_head.place(x=445, y=38)  # Posición inicial de la cabeza

        self.step_delay = 1000  # Intervalo de tiempo en milisegundos
        self.auto_step()

    def auto_step(self):
        current_symbol = self.cinta[self.head_position]
        if current_symbol == '0':
            self.cinta[self.head_position] = '1'
            self.head_position += 1
        else:
            self.cinta[self.head_position] = '0'
            self.head_position += 1

        # Actualiza el texto en las celdas
        for i in range(len(self.cinta)):
            self.cells[i].config(text=self.cinta[i])

        # Mueve la cabeza hacia abajo
        self.label_head.place(x=445 +36 * self.head_position, y=38)

        # Programa el siguiente paso automático
        self.root.after(self.step_delay, self.auto_step)

if __name__ == "__main__":
    root = tk.Tk()
    root.geometry("1200x1800")
    app = TuringMachineSimulator(root)
    root.mainloop()
