from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Permitimos CORS para que Angular (normalmente en el puerto 4200) pueda conectar
CORS(app)

@app.route('/api/registro', methods=['POST'])
def registro():
    data = request.json
    
    # En una campaña real, aquí podrías contar cuántos usuarios 'cayeron'
    # sin necesidad de guardar sus datos privados (DNI, Nombres).
    print(f"Alerta: Intento de registro detectado.")
    print(f"Simulando recepción de datos de: {data.get('email')}")

    # Respondemos con éxito para que Angular haga la redirección
    return jsonify({
        "status": "success",
        "message": "Registro procesado correctamente"
    }), 200

if __name__ == '__main__':
    import os
    # Toma el puerto de las variables de entorno (útil en Railway, Render, Heroku, etc.)
    port = int(os.environ.get("PORT", 5000))
    # El modo debug debería idealmente obtenerse de una variable de entorno, lo dejamos False por seguridad
    app.run(debug=False, port=port, host='0.0.0.0')