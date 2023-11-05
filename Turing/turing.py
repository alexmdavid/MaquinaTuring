import tkinter as tk

class TuringMachineSimulator:
    def __init__(self, root):
        self.root = root
        self.root.title("Simulador de Máquina de Turing")
        self.cinta = []  # Inicialmente, la cinta estará vacía, pq ya tenemos el campo de entrada palaos
        self.step_delay = 1000

        self.create_interface()
        self.auto_step()

    def create_interface(self):
        input_frame = tk.Frame(self.root)
        input_frame.pack(pady=10)

        self.input_label = tk.Label(input_frame, text="Entrada:")
        self.input_label.pack(side="left")

        self.input_entry = tk.Entry(input_frame, width=30)
        self.input_entry.pack(side="left")

        self.start_button = tk.Button(input_frame, text="Iniciar Simulación", command=self.start_simulation)
        self.start_button.pack(side="left")

        self.cinta_frame = tk.Frame(self.root)
        self.cinta_frame.pack()  # Crear un marco para las celdas de la cinta

        self.cells = []  # Inicialmente, la lista de celdas estará vacía

        self.label_head = tk.Label(self.root, text="▲", font=("Courier", 15))
        self.head_position = 0

    def start_simulation(self):
        entrada = self.input_entry.get()
        if entrada:
            self.cinta = list(entrada)
            self.head_position = 0
            # cac podemos Crear celdas en la interfaz gráfica basadas en la entrada
            for cell in self.cells:
                cell.destroy()  # perro pilla aqui se Eliminan celdas existentes antes de crear nuevas
            self.cells = [tk.Label(self.cinta_frame, text=char, font=("Courier", 20), width=2, borderwidth=1, relief="solid") for char in self.cinta]
            for cell in self.cells:
                cell.pack(side="left")
            self.auto_step()
        else:
            tk.messagebox.showerror("Error", "Por favor, ingrese una cadena en la entrada.")

    def auto_step(self):
        # ... (resto del código sin cambios) ...
        if self.head_position < 0 or self.head_position >= len(self.cinta):
            self.stop_simulation()
            return

        current_symbol = self.cinta[self.head_position]
        if current_symbol == '0':
            self.cinta[self.head_position] = '1'
            self.head_position += 1
        elif current_symbol == '1':
            self.cinta[self.head_position] = '0'
            self.head_position += 1

        self.move_head(self.head_position)

        for j in range(0, len(self.cells)):
            self.cells[j].config(text=self.cinta[j])

        if self.head_position >= len(self.cinta):
            self.stop_simulation()

        self.root.after(self.step_delay, self.auto_step)


    def stop_simulation(self):
        self.start_button.config(state="normal")

    def move_head(self, index):
        for cell in self.cells:
            cell.config(borderwidth=1, relief="solid")
        if index < len(self.cinta):
            self.cells[index].config(borderwidth=2, relief="raised")
            self.label_head.place(in_=self.cells[index], bordermode="outside", relx=0.5, rely=1.0, y=3)

if __name__ == "__main__":
    root = tk.Tk()
    root.minsize(800, 200)
    root.maxsize(800, 200)
    app = TuringMachineSimulator(root)
    root.mainloop()

