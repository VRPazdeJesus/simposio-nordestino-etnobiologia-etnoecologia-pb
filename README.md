# Terceiro Congresso Latino-Americano de Ecologia Política
- Ano: 2019
- Objetivo: 
     - Exibir em tempo real, as atividades que estão acontecendo naquele momento e em quais prédios. 
     - Exibir uma vitrine de livros que podem ser adquiridos no congresso e 2 que podem baixar.
     - Mapa, que sinaliza os prédios de aulas com atividades do congresso e exibe a posição onde a pessoa está.
- Tecnologia: Ionic v4
- Desenvolvedor: Víctor Romário Paz de Jesus

### Simulador do App para iOS e Android
```
ionic serve -l android ios
```

### Removendo plugins no projeto: remover do cordova e do ionic
```
cordova plugin remove nome-plugin
npm uninstall nome-plugin
```

### Gerando versão de debug para celular
```
ionic cordova build android --debug
```

### Remover e adicionar a plataforma Android, caso o Build dê falha
```
ionic cordova platform rm android
ionic cordova platform add android
```

### Gerar uma versão para release do app
```
ionic cordova build --release android
```

### Gerar certificado para o projeto e este sempre ser usado em todas assinaturas do app
senha: Victor2019.@
```
keytool -genkey -v -keystore congressoecologiapolitica.keystore -alias congressoecologiapolitica -keyalg RSA -keysize 2048 -validity 10000
```


### Assinar o app com o certificado gerado
senha: Victor2019.@
```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore congressoecologiapolitica.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk congressoecologiapolitica
```

### Empacotar o app com o zipalign. O executável do zipalign está dentro do SDK do Android Studio. Copia e cola o executável dentro da pasta build do projeto Ionic
```
platforms\android\app\build\outputs\apk\zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk congressoecologiapolitica.apk
```
