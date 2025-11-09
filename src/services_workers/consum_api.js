import axios from 'axios';

import { apiUrl } from '../constants/apiUrl';
// import { AdminStorage } from 'src/storages/admins_storage';

export default class ConsumApi {
  static api = axios.create({ headers: { 'Access-Control-Allow-Origin': '*' } });




  // static async setNominate({ nominate, event_id }) {
  //   try {
  //     const token = AdminStorage.getTokenAdmin();
  //     const body = { candidates: nominate, event_id };
  //     const response = await this.api.post(apiUrl.setNominate, body, {
  //       headers: { Authorization: token },
  //     });
  //     if (response.status >= 200 && response.status < 400) {
  //       const { data, success, message = '' } = response.data;
  //       if (success) {
  //         AdminStorage.validateNominate();
  //         return { data, success };
  //       }
  //       if (!success && message.indexOf('token') !== -1) {
  //         AdminStorage.clearStokage();
  //         return { message: 'Session Expiré veuillez vous réconnecter', success };
  //       }
  //       return { message, success };
  //     }
  //     return {
  //       etat: false,
  //       error: Error('Un problème avec le serveur. Veuillez réssayer ultérieurement'),
  //     };
  //   } catch (error) {
  //     return {
  //       etat: false,
  //       error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet"),
  //     };
  //   }
  // }

  // static async createEvent({
  //   base64,
  //   name_file,
  //   admin_id,
  //   beginDate,
  //   endDate,
  //   price,
  //   devise,
  //   location,
  //   typeTicket,
  //   level,
  //   title,
  // }) {
  //   try {
  //     const token = AdminStorage.getTokenAdmin();
  //     const { id } = AdminStorage.getInfoCompetition();
  //     const body = {
  //       base64: base64.split(',')[1],
  //       name_file,
  //       beginDate,
  //       competition_id: id,
  //       endDate,
  //       price,
  //       devise,
  //       location,
  //       typeTicket,
  //       admin_id,
  //       level,
  //       title: title.trim(),
  //     };
  //     const response = await this.api.post(apiUrl.createEvent, body, {
  //       headers: { Authorization: token },
  //     });
  //     if (response.status >= 200 && response.status < 400) {
  //       const { data, success, message = '' } = response.data;
  //       if (success) {
  //         AdminStorage.saveInfoEdition(data);
  //         return { data, success };
  //       }
  //       if (!success && message.indexOf('token') !== -1) {
  //         AdminStorage.clearStokage();
  //         return { message: 'Session Expiré veuillez vous réconnecter', success };
  //       }
  //       return { message, success };
  //     }
  //     return {
  //       etat: false,
  //       error: Error('Un problème avec le serveur. Veuillez réssayer ultérieurement'),
  //     };
  //   } catch (error) {
  //     return {
  //       etat: false,
  //       error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet"),
  //     };
  //   }
  // }

  static async getAllChain() {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxODUyNWYyMy0yMjcxLTQ5N2MtYWM4Ny1mNDc0MWY3ZDY4MjciLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDg0MDAzMiwiZXhwIjoxNzYxNDQ0ODMyfQ.bavbDd3bctr4RBeEv-fM3F23Xt4iRRbHMFO2blWXbmM";
      const response = await this.api.get(`${apiUrl.getAllChaine}`, {
        headers: { Authorization: token },
      });
      if (response.status >= 200 && response.status < 400) {
        const { result: data, etat: success, message } = response.data;
        if (success) return { data, success };
        if (!success && message.indexOf('token') !== -1) {
          // AdminStorage.clearStokage();
          return { message: 'Session Expiré veuillez vous réconnecter', success };
        }
        return { message, success };
      }
      return {
        etat: false,
        message: 'Un problème avec le serveur. Veuillez réssayer ultérieurement',
      };
    } catch (error) {
      return {
        etat: false,
        message: "Un problème lors de l'envoie. Veuillez vérifier votre connexion internet",
      };
    }
  }

  // static async deleteFormation({ _id }) {
  //   try {
  //     const token = AdminStorage.getTokenAdmin();
  //     const response = await this.api.delete(`${apiUrl.training}/${_id}`, {
  //       headers: { Authorization: token },
  //     });
  //     if (response.status >= 200 && response.status < 400) {
  //       const { result: data, etat: success, message } = response.data;
  //       if (success) return { data, success };
  //       if (!success && message.indexOf('token') !== -1) {
  //         AdminStorage.clearStokage();
  //         return { message: 'Session Expiré veuillez vous réconnecter', success };
  //       }
  //       return { message, success };
  //     }
  //     return {
  //       etat: false,
  //       message: 'Un problème avec le serveur. Veuillez réssayer ultérieurement',
  //     };
  //   } catch (error) {
  //     return {
  //       etat: false,
  //       message: "Un problème lors de l'envoie. Veuillez vérifier votre connexion internet",
  //     };
  //   }
  // }


}

