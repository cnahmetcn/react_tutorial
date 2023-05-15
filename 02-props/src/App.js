import "./App.css";
import User from "../components/User";

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
        <u>Props</u>
      </h1>
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
