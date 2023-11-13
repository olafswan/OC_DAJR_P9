import { ROUTES_PATH } from "../constants/routes.js";
import { formatDate, formatStatus } from "../app/format.js";
import Logout from "./Logout.js";

export default class {
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document;
    this.onNavigate = onNavigate;
    this.store = store;
    const buttonNewBill = document.querySelector(
      `button[data-testid="btn-new-bill"]`
    );
    if (buttonNewBill)
      buttonNewBill.addEventListener("click", this.handleClickNewBill);
    const iconEye = document.querySelectorAll(`div[data-testid="icon-eye"]`);
    if (iconEye)
      iconEye.forEach((icon) => {
        icon.addEventListener("click", () => this.handleClickIconEye(icon));
      });
    new Logout({ document, localStorage, onNavigate });
  }

  handleClickNewBill = () => {
    this.onNavigate(ROUTES_PATH["NewBill"]);
  };

  handleClickIconEye = (icon) => {
    const billUrl = icon.getAttribute("data-bill-url");
    const imgWidth = Math.floor($("#modaleFile").width() * 0.5);
    $("#modaleFile")
      .find(".modal-body")
      .html(
        `<div style='text-align: center;' class="bill-proof-container"><img width=${imgWidth} src=${billUrl} alt="Bill" /></div>`
      );
    $("#modaleFile").modal("show");
  };

  getBills = () => {
    if (this.store) {
      return this.store
        .bills()
        .list()
        .then((snapshot) => {
          // console.log(
          //   "🚀 ~ file: Bills.js:45 ~ .then ~ snapshot:\nDATA AVANT TRI",
          //   snapshot
          // );
          // trier snapshot par date en ordre décroissant
          let bills = [...snapshot].sort(function (a, b) {
            // console.log(
            //   "new Date(a.date)\n",
            //   new Date(a.date),
            //   "\n",
            //   a.name,
            //   "\n",
            //   a.date
            // );
            // console.log(
            //   "new Date(b.date)\n",
            //   new Date(b.date),
            //   "\n",
            //   b.name,
            //   "\n",
            //   b.date
            // );
            return new Date(b.date) - new Date(a.date);
          });
          // console.log(
          //   "🚀 ~ file: Bills.js:53 ~ snapshot.sort ~ snapshot:\nDATA APRES TRI",
          //   bills
          // );

          // let bills = snapshot;

          // console.log(formatDate(new Date("2020-01-01")));
          // console.log(formatDate(new Date("2020-02-01")));
          // console.log(formatDate(new Date("2020-03-01")));
          // console.log(formatDate(new Date("2020-04-01")));
          // console.log(formatDate(new Date("2020-05-01")));
          // console.log(formatDate(new Date("2020-06-01")));
          // console.log(formatDate(new Date("2020-07-01")));
          // console.log(formatDate(new Date("2020-08-01")));
          // console.log(formatDate(new Date("2020-09-01")));
          // console.log(formatDate(new Date("2020-10-01")));
          // console.log(formatDate(new Date("2020-11-01")));
          // console.log(formatDate(new Date("2020-12-01")));

          bills = bills.map((doc) => {
            // console.log("🚀 ~ file: Bills.js:42 ~ doc.date:\n", doc.date);
            try {
              return {
                ...doc,
                date: formatDate(doc.date),
                status: formatStatus(doc.status),
              };
            } catch (e) {
              // if for some reason, corrupted data was introduced, we manage here failing formatDate function
              // log the error and return unformatted date in that case
              console.log(e, "for", doc);
              return {
                ...doc,
                date: doc.date,
                status: formatStatus(doc.status),
              };
            }
          });
          // console.log("length", bills.length);
          return bills;
        });
    }
  };
}
