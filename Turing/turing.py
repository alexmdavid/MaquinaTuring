import tkinter as tk

class TuringMachineSimulator:
    def __init__(self, root):
        self.root = root
        self.root.title("Máquina de Turing Simulada")
        self.cinta = ["1", "1", "0", "1", "0", "1", "0", "1"]
        self.frame_cinta = tk.Frame(root)
        self.frame_cinta.pack()
        self.cells = [tk.Label(self.frame_cinta, text=char, font=("Courier", 20), width=2, borderwidth=1, relief="solid") for char in self.cinta]

        self.label_head = tk.Label(root, text="▲", font=("Courier", 15))
        self.head_position = 0
        self.step_delay = 1000  # Intervalo de tiempo en milisegundos

        for cell in self.cells:
            cell.pack(side="left")

        self.auto_step()

    def actualizar_cinta(self):
        if self.head_position < len(self.cinta):
            current_symbol = self.cinta[self.head_position]
            if current_symbol == '0':
                self.cinta[self.head_position] = '1'
                self.head_position += 1
            elif current_symbol == '1':
                self.cinta[self.head_position] = '0'
                self.head_position += 1

            # Mueve la cabeza debajo de la celda actual
            self.mover_cabeza(self.head_position)

        # Actualiza el texto en las celdas
        for j in range(0, len(self.cells)):
            self.cells[j].config(text=self.cinta[j])

        if self.head_position >= len(self.cinta):
            self.detener_simulacion()  # Detener la simulación si se llegó al final de la cinta

    def detener_simulacion(self):
        
        pass

    def mover_cabeza(self, index):
        for cell in self.cells:
            cell.config(borderwidth=1, relief="solid")  # Restaura el estilo de todas las celdas
        if index < len(self.cinta):
            self.cells[index].config(borderwidth=2, relief="raised")  # Destaca la celda actual, ey perro hace la celda mas gruesa
            self.label_head.place(in_=self.cells[index], bordermode="outside", relx=0.5, rely=1.0, y=3)

    def auto_step(self):
        self.actualizar_cinta()
        self.root.after(self.step_delay, self.auto_step)

if __name__ == "__main__":
    root = tk.Tk()
    root.minsize(1200, 600)
    root.maxsize(1200, 600)
    app = TuringMachineSimulator(root)
    root.mainloop()
