function App() {
  return (
    <div className="flex flex-col">
      <section className="w-sfull max-h-screen h-screen bg-maritimo-1 flex">
        <div className="flex flex-col mr-auto w-[50%] items-center justify-center ">
          <h1 className="font-caudex text-9xl text-maritimo-5 font-bold">
            Maritimo
          </h1>
          <p className="font-manrope max-w-xl text-3xl text-maritimo-5">
            En maritimo siempre hay una silla para ti... sólo falta que vengas.
          </p>
        </div>
      </section>
      <section className="w-full max-h-screen h-screen bg-maritimo-3 flex">
        <div className="flex flex-col ml-auto w-[50%] items-center justify-center ">
          <p className="font-manrope max-w-xl text-3xl text-maritimo-2 text-right leading-16 font-bold">
            Naces <br />
            Creces <br />
            Pruebas el café de maritimo <br />
            Te enamoras <br />
            Te mienten <br />
            Te das cuenta que el café no miente <br />
            Tomas más café <br />
            Vives feliz y con café
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
