import React from 'react';
import HeadMatter from 'components/HeadMatter';

const HomePage: React.FC<any> = () => {
  const title = 'Ilusa';
  const description = 'Kosmeetika';

  return (
    <main>
      <HeadMatter
        title={title}
        description={description}
        image="https://ilusa.ee/static/cards/modern-toolkit-forms.png"
        twitterCard="summary_large_image"
      />

      <div>
          <div className="fixed w-2/5 p-12 h-full">
            <div>
              <h2 className="mt-3 text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-orange-200">IMELINE</span>.
                <br />
                <span className="text-green-200">LOODUSLIK</span>.
                <br />
                <span className="text-pink-200">UNUSTAMATU</span>.
                <br />
                <span className="text-yellow-200">SINULE</span>.
                <br />
                <span className="text-red-200">ARMASTUSEGA</span>.
              </h2>
            </div>
            <img className="absolute -right-32 bottom-0 mb-24 pr-24 max-w-sm mx-auto bg-white rounded-r-full" src="/static/ilusa-mascot.png" alt="Ilusa mascot" />
            <div className="absolute bottom-0 pb-40">
              <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">Tsau, mina olen <span className="text-indigo-600">ILUSA</span>.</h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Olen 9 aastane tüdruk, kellele meeldib teha teistele lastele käsitöökosmeetika. Minu kosmeetika on <span className="font-bold">100% looduslik</span> ning hoole ja armastusega Eestis tehtud! Kui sooviksid endale ka neid mõnusaid tooteid, siis võta minuga ühendust ja teen sullegi :)
              </p>
              <button type="button" className="mt-5 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none bg-indigo-100 text-indigo-700">lisandra [at ] ilusa.ee</button>
            </div>
          </div>
          <div className="static w-3/5 ml-40p">
              <div className="w-100 p-24 bg-purple-300 max-w-6xl">
                <img className="mx-auto shadow-2xl rounded-lg max-w-2xl" src="/static/esimene.jpg" />
                <div className="mt-10 mx-auto">
                  <h2 className="text-center text-white text-sm tracking-tight leading-10 font-extrabold sm:text-xl sm:leading-none md:text-2xl">Tahke huulevõie südamekujulises karbis</h2>
                  <p className="mt-1 text-center text-base text-purple-500">Mesilasvaha, kakaovõi, kookosõli, vaseliin, mica pulber, eeterlikud õlid</p>
                </div>
              </div>
              <div className="w-100 p-24 bg-pink-300 max-w-6xl">
                <img className="mx-auto shadow-2xl rounded-lg max-w-2xl" src="/static/vedel.jpg" />
              </div>
              <div className="w-100 p-24 bg-green-300 max-w-6xl">
                <img className="mx-auto shadow-2xl rounded-lg max-w-2xl" src="/static/tahke-vaike.jpg" />
              </div>
              <div className="w-100 p-12 bg-yellow-300 max-w-6xl">
                <img className="mx-auto shadow-2xl rounded-lg max-w-2xl" src="/static/tahke-suur.jpg" />
              </div>
          </div>
      </div>

    </main>
  );
};

export default HomePage;
