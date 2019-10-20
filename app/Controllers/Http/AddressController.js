"use strict";

const Env = use("Env");

const axios = use("axios");

class AddressController {
  async getAddressMap({ request, response }) {
    const GOOGLE_MAPS_KEY = Env.get("GOOGLE_MAPS_KEY", "");
    const HTTP_POST = request.post();

    const logradouro = HTTP_POST.logradouro.replace(" ", "+");
    const localidade = HTTP_POST.localidade.replace(" ", "+");

    let imageURL = `https://maps.googleapis.com/maps/api/staticmap?center=${logradouro},${localidade},${HTTP_POST.uf}`;
    imageURL += `&zoom=15&size=480x300&format=jpeg&maptype=roadmap&markers=color:red&key=${GOOGLE_MAPS_KEY}`;

    console.log(imageURL);
    // try {
    //   let { data } = await axios.get(imageURL);

    //   return data;
    // } catch (error) {
    //   console.log("Ocorreu um erro");
    //   console.log(error.toString());

    //   return imageURL;
    // }

    return imageURL;
  }
}

module.exports = AddressController;
