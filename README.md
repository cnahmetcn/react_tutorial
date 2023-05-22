# REACT Öğrenme Sürecinde Alınan Notlar

## Bir React Projesini Ayağa Kaldırmak (create-react-app)

Aşağıdaki kod ile yeni bir react projesi oluşturabiliriz.

```
npx create-react-app project_name
```

Eğer npx yüklü değil ise yüklememiz gerekecektir.

```
npm i -g npx
```

Projeyi çalıştırmak için

```
npm start
```

## Component Nedir?
    Kullanıcı arayüzünü şekillendiren, belirli görevleri olan, class veya fonksiyon olarak tanımlanmış, geriye react elementleri döndüren, opsiyonel olarak parametre (prop) alan yapı taşlarıdır. Bir sayfada gördüğümüz header, footer, sidebar, navbar ... gibi alanlar örnek verilebilir. 

```js
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

Yukarıdaki kodda App.js dosyası import ediliyor. Daha sonra public/index.html dosyasındaki **root** id li nesneye erişerek App.js dosyasını render ediyor. Yani burada çalışmasını sağlıyor. 

- Bir html kodunu return ederden kapsayıcı kullanmak gerekir. Kodu ya <div> </div> içine yada <> </> içine almalıyız.
- html ifadelerini yazarken class yerine className kullanmalıyız.
- label da for yerine ise htmlFor kullanmalıyız.
- Dinamik olarak bir yazı göstermek istersek {} ifadesi içinde yazılmalıdır. Örneğin {name} gibi. Yada {`Benim adım ${name}`} gibi de kullanılabilir.


## Props Nedir?
    Componentlerimize parametre göndermek için kullanırız.

- props ları gönderirken istediğimiz şekilde istediğimiz sırada gönderebiliriz.
- boolean, int ve array ifadeleri {} içinde gönderiyoruz.
- propsları kullanırken props.name olarak da yazabilirizi yada propsları fonksiyonda tanımlayıp name, surname şeklinde direkt olarak da kullanabiliriz.
- propsların tipini belirtmek için Proptypes kullanılır.
- Bir prop zorunlu olacaksa isRequired kullanılır. 
- Birden fazla veri tipi gönderilmek istenirse oneOfType kullanılır. 
- Bir array içindeki alanlara erişmek istersek shape kullanılır.
- Herhangi bir değer verilmemiş bir propa default bir değer vermek için defaultProps kullanılır.


## State Nedir?
  Componentler üzerinde, değerinin değişme potansiyeli olan bütün verileri tutan bir objedir.

- state kullanmak için çağırmak gerekir. return ün dışında tanımlanır.
  ```js
  import {useState} from 'react'
  ```
  ```js
  const [stateName, setStateName] = useState(defaultVar)
  ```
- Bir array içerisine bir veri eklemek istediğimizde [] içerisine set etmeliyiz. Ancak direkt olarak böyle yazarsak sadece en son set ettiğimiz veriyi görürüz. Bu yüzden set ederken setState([...stateName, data]) şeklinde yazıp state deki diğer verileri de almalıyız. Eğer veriyi başa eklemek istersekde setState([data, ...stateName]) şeklinde yazarız. 
- Bir objeyi değiştirmek istediğimizde o objenin bir bölümünü değiştirme istersek setState({...stateName, key:value}) şeklinde yazarız.

## Lifecycle (UseEffect) Nedir?
  Componentler DOM'a mount olduğu anda, component üzerindeki state değiştiği anda veya unomunt olduğu anda bu durumların yakalanıp ilgili durumlara göre işlem yapıılmasıdır. 

```js
import {useEffect} from 'react';
useEffect(() => {
    
  }, [])
```

## Style
  
- Normal html in aksine React ta bir etiketin içine stil tanımı yapmak için style={{}} kullanılır.
- Ayrıca *-* işareti kullanılmaz. Bunun yerine camelCase yapısı kullanılır. backgrounColor, marginBottom ... gibi.
- Eğer dışarıdan bir css, js kütüphanesi kullanmak istiyorsanız, public klasörünün altındaki index.html içine ilgili kütüphaneleri ekleyin.
- Farklı componentlerimiz olsun (A, B) ve bu componenetlerimiz için ayrı stil tanımlamalarımız (A/styles.css , B/styles.css) olsun. Her ne kadar farklı klasör ve componentler olsa da render edildiği zaman sadece bir tanımı alır ve hepsine uygular. Bunun önüne geçmek için stilleri (A/styles.module.css , B/styles.module.css) şeklinde oluşturmalıyız. Bu sayede css tanımıı aynı olsa da render edildiği zaman uniq bir değer atanmış oluyor.

## Fetching
  Bir API yi uygulamada göstermek için kullanılır. 

- Bir API kullanacakken fetch ve axios kullanılabilir. Axios u kullanmak için axios kütüphanesini de yüklemek gerekir ```npm i axios```. Fetch için buna gerek yoktur.
- Fetxh kullanırken gelen veri json parse edilmelidir. Axios da buna gerek yoktur ancak veri **res.data** şeklinde alınmalıdır.