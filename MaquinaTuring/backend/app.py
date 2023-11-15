from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2 import OperationalError


app = Flask(__name__)
CORS(app)

def conectar_bd():
    try:
        conn = psycopg2.connect(
            dbname="Maquina_de_turing",
            user="postgres",
            password="0000",
            host="localhost"
        )
        return conn
    except OperationalError as e:
        print(f"Error al conectar a la base de datos: {e}")
        return None
    
    
    
def insert_word(conn, word):
    if conn is not None:
        try:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO palabras (palabra)
                VALUES (%s)
            """, word)
            conn.commit()
            print("Jugador insertado correctamente.")
        except Exception as e:
            conn.rollback()
            print(f"Error al insertar jugador: {e}")
        finally:
            cursor.close()



def retorn(palabra):
    return str(palabra)

@app.route('/agregar_palabra', methods=['POST'])
def agregar_palabra():
    try:
        datos = request.get_json()
        palabra = datos.get('palabra')
        conn = conectar_bd()
        if conn is not None:
            tuple_word = (palabra,)
            insert_word(conn, tuple_word)
        # Muestra la palabra por consola
        print(f"Palabra recibida: {palabra}")

        return jsonify({'mensaje': 'Palabra recibida correctamente'}), 200
    except Exception as e:
        print(f"Error al procesar la palabra: {str(e)}")
        return jsonify({'error': 'Error al procesar la palabra'}), 500

if __name__ == '__main__':
    app.run(debug=True)
