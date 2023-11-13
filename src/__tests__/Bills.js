/**
 * @jest-environment jsdom
 */

import {
  screen,
  waitFor,
  fireEvent,
  getByTestId,
  getAllByTestId,
  getByText,
} from "@testing-library/dom";
import BillsUI from "../views/BillsUI.js";
import { bills } from "../fixtures/bills.js";
import { ROUTES, ROUTES_PATH } from "../constants/routes.js";
import { localStorageMock } from "../__mocks__/localStorage.js";
import { log } from "console";
import Bills from "../containers/Bills.js";
import mockStore from "../__mocks__/store";

import router from "../app/Router.js";

import userEvent from "@testing-library/user-event";

jest.mock("../app/store", () => mockStore);

describe("Given I am connected as an employee", () => {
  describe("When I am on Bills Page", () => {
    test("Then bill icon in vertical layout should be highlighted", async () => {
      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
        })
      );
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.append(root);
      router();
      window.onNavigate(ROUTES_PATH.Bills);
      await waitFor(() => screen.getByTestId("icon-window"));
      const windowIcon = screen.getByTestId("icon-window");
      // console.log(windowIcon);
      log(windowIcon);
      //to-do write expect expression
      // rediger un except où la div layout-icon1 à la class active-icon
      // expect(windowIcon.attr("class")).toBe("active-icon");
      expect(windowIcon.classList.contains("active-icon")).toBe(true);
    });

    test("Then bills should be ordered from earliest to latest", () => {
      //ensuite les notes doivent être en ordre croissant
      document.body.innerHTML = BillsUI({ data: bills });
      const dates = screen
        .getAllByText(
          /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i
        )
        .map((a) => a.innerHTML);
      const antiChrono = (a, b) => a - b;
      const datesSorted = [...dates].sort(antiChrono);
      expect(dates).toEqual(datesSorted);
    });

    // ADDED TESTS

    // test("Then buttonNewBill should be visible", () => {
    //   //TODO write assertion

    //   expect().toBe(true);
    // });

    // test("Then buttonShowReceipt should open a modal", () => {
    //   //TODO write assertion

    //   expect().toBe(true);
    // });

    describe("When I click on eye icon (Actions column)", () => {
      test("Then modal should open", () => {
        Object.defineProperty(window, localStorage, {
          value: localStorageMock,
        });
        window.localStorage.setItem(
          "user",
          JSON.stringify({ type: "Employee" })
        ); //on simule en utilisateur connécter de type employé
        const html = BillsUI({ data: bills }); //création de la constante la modale facture de l'employé
        document.body.innerHTML = html;

        const onNavigate = (pathname) => {
          //navigation vers la route bills
          document.body.innerHTML = ROUTES({ pathname });
        };

        const billsContainer = new Bills({
          //creation d'une facture
          document,
          onNavigate,
          localStorage: localStorageMock,
          store: null,
        });

        //MOCK de la modale
        $.fn.modal = jest.fn(); //affichage de la modale

        //MOCK L'ICÔNE DE CLIC
        const handleClickIconEye = jest.fn(() => {
          //fonction qui simule un click
          billsContainer.handleClickIconEye;
        });
        const firstEyeIcon = screen.getAllByTestId("icon-eye")[0];
        firstEyeIcon.addEventListener("click", handleClickIconEye); //surveil un événement au click sur l'oeil
        fireEvent.click(firstEyeIcon); //click sur l'icone
        expect(handleClickIconEye).toHaveBeenCalled(); //vérifie si l'evenement au click a été appeler
        expect($.fn.modal).toHaveBeenCalled(); // vérifie si la modale est appeler
      });
    });

    describe("When i click the button 'Nouvelle note de frais'", () => {
      //je clique sur le bouton nouvelle note de frais
      test("Then newbill appears", () => {
        // Vérifie qu'on arrive bien sur la page NewBill
        //J'intègre le chemin d'accès
        const onNavigate = (pathname) => {
          document.body.innerHTML = ROUTES({ pathname });
        };
        const billsPage = new Bills({
          document,
          onNavigate,
          store: null,
          bills: bills,
          localStorage: window.localStorage,
        });
        //création constante pour la fonction qui appel la fonction a tester
        const OpenNewBill = jest.fn(billsPage.handleClickNewBill); //l20 bills.js
        const btnNewBill = screen.getByTestId("btn-new-bill"); //cible le btn nouvelle note de frais
        btnNewBill.addEventListener("click", OpenNewBill); //écoute évènement
        fireEvent.click(btnNewBill); //simule évènement au click
        // on vérifie que la fonction est appelée et que la page souhaitée s'affiche
        expect(OpenNewBill).toHaveBeenCalled(); //je m'attends à ce que la page nouvelle note de frais se charge
        expect(screen.getByText("Envoyer une note de frais")).toBeTruthy(); //la nouvelle note de frais apparait avec le titre envoyer une note de frais
      });
    });

    // END ADDED TESTS
  });
});

// test d'intégration GET
describe("Given I am a user connected as Employee", () => {
  describe("When I navigate to Bill", () => {
    test("fetches Employee's bill from mock API GET", async () => {
      localStorage.setItem(
        "user",
        JSON.stringify({ type: "Employee", email: "a@a" })
      );
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.append(root);
      router();
      window.onNavigate(ROUTES_PATH.Bills);
      await waitFor(() => screen.getByText("Mes notes de frais"));
      const transportBill = screen.getAllByText("Transports");
      expect(transportBill).toBeTruthy();
    });
    describe("When an error occurs on API", () => {
      beforeEach(() => {
        jest.spyOn(mockStore, "bills");
        Object.defineProperty(window, "localStorage", {
          value: localStorageMock,
        });
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            type: "Employee",
            email: "a@a",
          })
        );
        const root = document.createElement("div");
        root.setAttribute("id", "root");
        document.body.appendChild(root);
        router();
      });
      test("fetches bills from an API and fails with 404 message error", async () => {
        mockStore.bills.mockImplementationOnce(() => {
          return {
            list: () => {
              return Promise.reject(new Error("Erreur 404"));
            },
          };
        });
        window.onNavigate(ROUTES_PATH.Bills);
        await new Promise(process.nextTick);
        const message = await screen.getByText(/Erreur 404/);
        expect(message).toBeTruthy();
      });

      test("fetches messages from an API and fails with 500 message error", async () => {
        mockStore.bills.mockImplementationOnce(() => {
          return {
            list: () => {
              return Promise.reject(new Error("Erreur 500"));
            },
          };
        });

        window.onNavigate(ROUTES_PATH.Bills);
        await new Promise(process.nextTick);
        const message = await screen.getByText(/Erreur 500/);
        expect(message).toBeTruthy();
      });
    });
  });
});
