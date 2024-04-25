#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Vinicius de Andrade";
const char* password = "prosperidade1708";

const char* serverUrl = "http://192.168.2.116:3000/update-sensor";
const int sensorPin = 34; // O pino que o sensor está conectado

// Calibrar esses valores de acordo com sua calibração
const int dryValue = 4095;    // Valor para completamente seco
const int wetValue = 0;  // Valor para completamente molhado

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Conectado ao WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");

    int sensorValue = analogRead(sensorPin);
    int moisturePercentage = map(sensorValue, dryValue, wetValue, 0, 100);

    String jsonData = "{\"id\":1, \"floor\":\"" + String(moisturePercentage) + "%\"}";

    Serial.println("Enviando dados: " + jsonData);

    int httpResponseCode = http.POST(jsonData);
    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Resposta recebida: " + response);
    } else {
      Serial.print("Erro ao enviar POST: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  } else {
    Serial.println("Erro na conexão WiFi");
  }
  delay(1000);  // Envio de dados a cada 1 segundos
}
