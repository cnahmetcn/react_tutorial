import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

const name = "Ahmet";
const surname = "Can";
const isLogin = false;
const family = [
  {
    name: "Özcan",
    surname: "Şimşek",
  },
  {
    name: "Nejla",
    surname: "Şimşek",
  },
  {
    name: "İbrahim",
    surname: "Can",
  },
  {
    name: "Nazife",
    surname: "Can",
  },
];

function App() {
  return (
    <div className="App">
      <h1>
        <u>Components</u>
      </h1>
      <h2>Hello React</h2>
      <Header />
      <p>
        Bu proje {name} {surname} tarafından oluşturulmuştur.
      </p>
      {isLogin ? <p>Giriş yapıldı</p> : <p>Giriş yapılmadı</p>}
      {/* yada
      {isLogin && <p>Giriş yapıldı</p>}
      {!isLogin && <p>Giriş yapılmadı</p>} */}

      <br />
      <hr />
      <br />
      <h1>
        <u>Props</u>
      </h1>

      <User
        name="Kübra"
        surname="Can"
        age={28}
        isLogin={true}
        softLang={["C#", "ASP", "CRM", "JS", "HTML"]}
        aile={family}
        address=
        // write 5 address in Turkey in array
        {[
          {
            title: "İstanbul",
            zip: 34000,
          },
          {
            title: "İzmir",
            zip: 35000,
          },
          { 
            title: "Ankara",
            zip: 6000,
          },
          {
            title: "Kayseri",
            zip: "38000",
          }
        ]
      }
      />
    </div>
  );
}

export default App;
