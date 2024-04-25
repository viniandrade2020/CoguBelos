#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid     = "SEU_SSID"; // Substitua pelo nome da sua rede Wi-Fi
const char* password = "SUA_SENHA"; // Substitua pela senha da sua rede Wi-Fi

int SENSOR_PIN = 34; // Pino onde o sensor está conectado

void setup() {
  Serial.begin(115200);
  delay(10);

  // Conectando ao Wi-Fi
  Serial.println("Conectando ao Wi-Fi");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi conectado.");
  Serial.println("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Lê o valor do sensor de umidade do solo
  int sensorValue = analogRead(SENSOR_PIN);

  // Verifica se está conectado ao WiFi
  if(WiFi.status() == WL_CONNECTED){
    HTTPClient http;

    // Substitua pela URL do seu servidor Node.js
    http.begin("http://seu_servidor_ip/endpoint"); 
    http.addHeader("Content-Type", "application/json");

    // Prepara os dados em formato JSON
    String httpRequestData = "{\"umidade\": " + String(sensorValue) + "}";
    int httpResponseCode = http.POST(httpRequestData);

    if (httpResponseCode > 0) {
      String response = http.getString(); // Recebe a resposta do servidor
      Serial.println(response);
    }
    else {
      Serial.print("Erro no código de status HTTP: ");
      Serial.println(httpResponseCode);
    }

    http.end(); // Fecha a conexão
  }
  else {
    Serial.println("Desconectado do WiFi");
  }

  delay(10000); // Espera por 10 segundos antes da próxima leitura
}
