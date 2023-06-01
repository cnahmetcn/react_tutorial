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


### Async & Await 
  Bir işlemin tamamlanmasını bekledikten sonra diğer işlemi yapmak için kullanılır.
 


## Routing 
  Link ve yönlendirme işlemleri için kullanılır.

```cd
npm i react-router-dom
```

- Route ları <BrowserRouter> </BrowserRouter> tagı içinde yazmalıyız. 
- <Link> </Link> tag ı ile react için link ler oluşturabiliriz.
- useNavigator hook u ile <Link> kullanmadan linkler oluşturabiliriz. Ayrıca linke -1 vererek geri dönmesini sağlayabiliriz.
- useParams ile linklere parametre verebiliriz.
- useLocation ile route lar arası veri taşıyabiliriz.


## Form İşlemleri (Formik)
  Form işlemleri yapmak için formik paketi kullanılıyor.

```cd
npm i formik
```

- Eğer Formik kullanırken html formu kullanacaksak {() => ()} arrow fonksiyonun içine html formu yazmalıyız. 
- Formik componenti yerine daha temiz bir kod bloğu yazmak istersek useFormik hook u kullanılır. 
- Form submit edildiği anda bir işlem yapmak istiyorsak **isSubmitting** kullanılır. 
- onsubmit te **bag** isimli bir parametre mevcut ve bu parametre ile formu gönderdikten sonra initial haline dönderebiliriz.
- Form kontrollerini Yup kütüphanesi ile yapabiliriz.
- Kullanıcı deneyimi için bir alanda hata olduğunda tüm alanlarda hata mesajını göstermek yerine ilgili alanda ilgili hata mesajını göstermek için handleBlur ve touched kullanılır. 
- Backend tarafından oluşturulan hataları setErrors ile yakalayabiliriz. 


## Memoization
  Memo ile gereksiz bileşen render süreçlerinin önüne nasıl geçilebilir.  

- React.memo ve useMemo kullanarak işlem yapılmayan componentlerin yeniden render edilmesini önleyebiliriz.  
- useCallback hook u fonksiyonlar için kullanılır. Bir component içindeki bir fonksiyon bir başka component içinde kullanılıyorsa useCallback hook u ile o fonksiyonu memoize edebiliriz. Böylece o fonksiyonun bağlı olduğu component tekrar render edilmediği sürece o fonksiyon tekrar oluşturulmaz. Bu da performans açısından önemlidir.


## Context API 
  State leri yönetebileceğimiz bir araçtır. 

- State yönetim aracından beklentiler şu şekildedir.
  1. Başlangıç state ini tanımlamak.
  2. Bu state e erişmek.
  3. Bu state i değiştirmek.

- createContext ile Context i oluşturmak için ve bu Context i kullanmak için de useContext hooku kullanılır. 
