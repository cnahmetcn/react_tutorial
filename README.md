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