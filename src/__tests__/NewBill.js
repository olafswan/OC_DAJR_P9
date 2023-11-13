// /**
//  * @jest-environment jsdom
//  */
// import "@testing-library/jest-dom";
// import mockStore from "../__mocks__/store";
// import { screen, fireEvent } from "@testing-library/dom";
// import NewBillUI from "../views/NewBillUI.js";
// import NewBill from "../containers/NewBill.js";
// import userEvent from "@testing-library/user-event"; // You may need to install this library if not already done.
// import router from "../app/Router.js";
// import { localStorageMock } from "../__mocks__/localStorage.js";
// import { ROUTES, ROUTES_PATH } from "../constants/routes";

// jest.mock("../app/store", () => mockStore);

// describe("Given I am connected as an employee on NewBill Page", () => {
//   Object.defineProperty(window, "localStorage", { value: localStorageMock });
//   window.localStorage.setItem(
//     "user",
//     JSON.stringify({
//       type: "Employee",
//     })
//   );
//   describe("When I am on NewBill Page", () => {
//     describe("When I upload an invalid file", () => {
//       test("Then an error message appears", () => {
//         const html = NewBillUI();
//         document.body.innerHTML = html;
//         const onNavigate = (pathname) => {
//           document.body.innerHTML = ROUTES({ pathname });
//         };
//         const newBill = new NewBill({
//           document,
//           onNavigate,
//           store: null,
//           localStorage: window,
//           localStorage,
//         });
//         const loadFile = jest.fn((e) => newBill.handleChangeFile(e));
//         const fileInput = screen.getByTestId("file");
//         const testFile = new File(["test file"], "failFile.txt", {
//           type: "document/txt",
//         });
//         fileInput.addEventListener("change", loadFile);
//         fireEvent.change(fileInput, { target: { files: [testFile] } });

//         expect(loadFile).toHaveBeenCalled();
//         expect(screen.getByText(".jpg .jpeg ou .png")).toBeTruthy();
//       });
//     });

//     // test("Then upload an invalid file should change the class of the input", () => {
//     //   const fileInput = screen.getByTestId("file");
//     //   const file = new File(["file content"], "factureInvalide.txt", {
//     //     type: "text/plain",
//     //   });

//     //   userEvent.upload(fileInput, file);

//     //   //TODO upload invalid file

//     //   expect(fileInput.files[0]).toStrictEqual(file);

//     //   // expect(fileInput.classList.contains("red-border")).toBe(true);
//     // });

//     // test("Then upload an invalid file should show an error message", () => {
//     //   const
//     //   //TODO upload invalid file

//     //   expect().toBe(true);
//     // });

//     // test("Then upload an invalid file should prevent to submit the form", () => {
//     //   //TODO upload valid file and submit

//     //   expect().toBe(true);
//     // });

//     // test("Then a well filled form should allow to submit the form", () => {
//     //   //TODO upload valid file, fill the form and submit

//     //   expect().toBe(true);
//     // });
//   });
// });

// ------ V2

// /**
//  * @jest-environment jsdom
//  */

// import "@testing-library/jest-dom";
// import { screen, fireEvent, getByTestId, waitFor } from "@testing-library/dom";
// import mockStore from "../__mocks__/store.js";
// import NewBill from "../containers/NewBill.js";
// import { ROUTES, ROUTES_PATH } from "../constants/routes.js";
// import { localStorageMock } from "../__mocks__/localStorage.js";
// import router from "../app/Router.js";

// jest.mock("../app/Store", () => mockStore);

// describe("Given I am connected as an employee", () => {
//   describe("When I am on NewBill Page", () => {
//     // test("Then mail icon in vertical layout should be highlighted", async () => {
//     //   Object.defineProperty(window, "localStorage", {
//     //     value: localStorageMock,
//     //   });
//     //   window.localStorage.setItem(
//     //     "user",
//     //     JSON.stringify({
//     //       type: "Employee",
//     //     })
//     //   );
//     //   const root = document.createElement("div");
//     //   root.setAttribute("id", "root");
//     //   document.body.append(root);
//     //   router();
//     //   window.onNavigate(ROUTES_PATH.NewBill);
//     //   await waitFor(() => screen.getByTestId("icon-mail"));
//     //   const windowIcon = screen.getByTestId("icon-mail");
//     //   expect(windowIcon).toHaveClass("active-icon");
//     // });

//     describe("When I choose a wrong format of file to upload ", () => {
//       test("Then an error message is displayed", async () => {
//         const onNavigate = (pathname) => {
//           document.body.innerHTML = ROUTES({ pathname });
//         };
//         Object.defineProperty(window, "localStorage", {
//           value: localStorageMock,
//         });
//         window.localStorage.setItem(
//           "user",
//           JSON.stringify({
//             type: "Employee",
//           })
//         );
//         const newBill = new NewBill({
//           document,
//           onNavigate,
//           store: mockStore,
//           localStorage: localStorageMock,
//         });
//         const handleChangeFile = jest.fn(newBill.handleChangeFile);
//         const inputFile = screen.getByTestId("file");
//         inputFile.addEventListener("change", handleChangeFile);
//         fireEvent.change(inputFile, {
//           target: {
//             files: [
//               new File(["document.txt"], "document.txt", {
//                 type: "document/txt",
//               }),
//             ],
//           },
//         });
//         expect(screen.getByText("Envoyer une note de frais")).toBeTruthy();
//         expect(handleChangeFile).toBeCalled();
//         await waitFor(() => getByTestId(document.body, "message"));
//         expect(screen.getByText(".jpg .jpeg ou .png")).toBeTruthy();
//         expect(file.classList).toContain("red-border");
//         expect(file.classList).not.toContain("blue-border");
//         // expect(getByTestId(document.body, "message").classList).not.toContain(
//         //   "hidden"
//         // );
//       });

//       // describe("When I choose a good format of file ", () => {
//       //   test("Then the file input should get the file name", async () => {
//       //     const onNavigate = (pathname) => {
//       //       document.body.innerHTML = ROUTES({ pathname });
//       //     };
//       //     Object.defineProperty(window, "localStorage", {
//       //       value: localStorageMock,
//       //     });
//       //     window.localStorage.setItem(
//       //       "user",
//       //       JSON.stringify({
//       //         type: "Employee",
//       //       })
//       //     );
//       //     const newBill = new NewBill({
//       //       document,
//       //       onNavigate,
//       //       store: mockStore,
//       //       localeStorage: localStorageMock,
//       //     });
//       //     const handleChangeFile = jest.fn(newBill.handleChangeFile);
//       //     const inputFile = screen.getByTestId("file");
//       //     inputFile.addEventListener("change", handleChangeFile);
//       //     fireEvent.change(inputFile, {
//       //       target: {
//       //         files: [
//       //           new File(["image.png"], "image.png", {
//       //             type: "image/png",
//       //           }),
//       //         ],
//       //       },
//       //     });
//       //     expect(screen.getByText("Envoyer une note de frais")).toBeTruthy();
//       //     expect(handleChangeFile).toBeCalled();
//       //     await waitFor(() => getByTestId(document.body, "message"));
//       //     expect(getByTestId(document.body, "message").classList).toContain(
//       //       "hidden"
//       //     );
//       //     setTimeout(async () => {
//       //       await waitFor(() => screen.getByText("image.png"));
//       //       expect(screen.getByText("image.png")).toBeTruthy();
//       //       expect(inputFile.files[0].name).toBe("image.png");
//       //     }, 1000);
//       //   });
//       // });
//     });
//   });
// });

// // TEST API resonse

// // describe("When I am on NewBill Page and submit the form", () => {
// //   beforeEach(() => {
// //     jest.spyOn(mockStore, "bills");
// //     Object.defineProperty(window, "localStorage", { value: localStorageMock });
// //     window.localStorage.setItem(
// //       "user",
// //       JSON.stringify({
// //         type: "Employee",
// //         email: "a@a",
// //       })
// //     );
// //     const root = document.createElement("div");
// //     root.setAttribute("id", "root");
// //     document.body.appendChild(root);
// //     router();
// //   });
// //   describe("When API is OK", () => {
// //     test("Then it should call updatebills function", async () => {
// //       const newBill = new NewBill({
// //         document,
// //         onNavigate,
// //         store: mockStore,
// //         localeStorage: localStorageMock,
// //       });
// //       const handleSubmit = jest.fn(newBill.handleSubmit);
// //       const form = screen.getByTestId("form-new-bill");
// //       form.addEventListener("submit", handleSubmit);
// //       fireEvent.submit(form);
// //       expect(mockStore.bills).toHaveBeenCalled();
// //     });
// //   });
// //   describe("When API fail", () => {
// //     test("Then it should display an error", async () => {
// //       window.onNavigate(ROUTES_PATH.NewBill);
// //       mockStore.bills.mockImplementationOnce(() => {
// //         return {
// //           update: () => {
// //             return Promise.reject(new Error("Erreur"));
// //           },
// //         };
// //       });
// //       const newBill = new NewBill({
// //         document,
// //         onNavigate,
// //         store: mockStore,
// //         localeStorage: localStorageMock,
// //       });
// //       const handleSubmit = jest.fn(newBill.handleSubmit);
// //       const form = screen.getByTestId("form-new-bill");
// //       form.addEventListener("submit", handleSubmit);
// //       fireEvent.submit(form);
// //       setTimeout(() => {
// //         expect(getByTestId(document.body, "error").classList).not.toContain(
// //           "hidden"
// //         );
// //       }, 1000);
// //     });
// //   });
// // });

// //await new Promise(resolve => setTimeout(resolve, 1000))
// /// Si nous attendons la résolution d'une promesse quelconque

// ------- V3

/**
 * @jest-environment jsdom
 */

import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { ROUTES, ROUTES_PATH } from "../constants/routes";
import { localStorageMock } from "../__mocks__/localStorage.js";
import mockStore from "../__mocks__/store";
import router from "../app/Router.js";
import userEvent from "@testing-library/user-event";

jest.mock("../app/store", () => mockStore);

describe("Given I am connected as an employee on New Bills Page", () => {
  beforeEach(() => {
    // simule le local sotrage
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
    // simule la connexion employé
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
    window.onNavigate(ROUTES_PATH.NewBill);
  });
  test("Then new bill icon in vertical layout should be highlighted", async () => {
    await waitFor(() => screen.getByTestId("icon-mail"));
    const mailIcon = screen.getByTestId("icon-mail");
    expect(mailIcon.classList[0]).toBe("active-icon");
  });

  describe("When a file is selected through file input", () => {
    test("Then uploading valid format file should work without showing an error message", () => {
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      };

      const employeeNewBill = new NewBill({
        document,
        onNavigate,
        store: mockStore,
        localStorage: window.localStorage,
      });

      jest.spyOn(window, "alert").mockImplementation(() => {});
      const inputFile = screen.getByTestId("file");

      const handleChangeFile = jest.fn(employeeNewBill.handleChangeFile);
      inputFile.addEventListener("change", (e) => handleChangeFile(e));
      const file = new File(["test"], "test.png", { type: "image/png" });
      userEvent.upload(inputFile, file);
      expect(handleChangeFile).toHaveBeenCalled();
      expect(window.alert).not.toHaveBeenCalled();
      expect(inputFile.files[0]).toStrictEqual(file);
    });

    test("Then uploading valid format file should show an error message", () => {
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      };
      // document.body.innerHTML = NewBillUI()
      const newBill = new NewBill({
        document,
        onNavigate,
        store: mockStore,
        localStorage: window.localStorage,
      });
      jest.spyOn(window, "alert").mockImplementation(() => {});
      const inputFile = screen.getByTestId("file");
      const handleChangeFile = jest.fn(newBill.handleChangeFile);
      inputFile.addEventListener("change", (e) => handleChangeFile(e));
      const file = new File(["text"], "text.txt", { type: "text/plain" });
      userEvent.upload(inputFile, file);
      expect(handleChangeFile).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalled;
      expect(inputFile.value.length).toBe(0);
      expect(inputFile.classList).toContain("red-border");
      expect(inputFile.classList).not.toContain("blue-border");
    });
  });

  describe("When I submit the form with a valid format file (jpg, jpeg, png)", () => {
    test("Then it should create a new bill", () => {
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      };
      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
        })
      );
      document.body.innerHTML = NewBillUI();

      const newBill = new NewBill({
        document,
        onNavigate,
        store: null,
        localStorage: window.localStorage,
      });
      const handleSubmit = jest.fn(newBill.handleSubmit);
      const submitBtn = screen.getByTestId("form-new-bill");
      submitBtn.addEventListener("submit", handleSubmit);
      fireEvent.submit(submitBtn);
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});

// ---------- V1 ---------------

// // Test d'intégration POST
// describe("Given I am a user connected as Employee", () => {
//   describe("When I submit the form completed", () => {
//     test("Then the bill is created", async () => {
//       document.body.innerHTML = NewBillUI();

//       const onNavigate = (pathname) => {
//         document.body.innerHTML = ROUTES({ pathname });
//       };

//       Object.defineProperty(window, "localStorage", {
//         value: localStorageMock,
//       });
//       window.localStorage.setItem(
//         "user",
//         JSON.stringify({
//           type: "Employee",
//         })
//       );

//       const newBill = new NewBill({
//         document,
//         onNavigate,
//         store: null,
//         localStorage: window.localStorage,
//       });

//       const validBill = {
//         type: "Restaurants et bars",
//         name: "Vol Paris Londres",
//         date: "2022-02-15",
//         amount: 200,
//         vat: 70,
//         pct: 30,
//         commentary: "Commentary",
//         fileUrl: "../img/0.jpg",
//         fileName: "test.jpg",
//         status: "pending",
//       };

//       // Load the values in fields
//       screen.getByTestId("expense-type").value = validBill.type;
//       screen.getByTestId("expense-name").value = validBill.name;
//       screen.getByTestId("datepicker").value = validBill.date;
//       screen.getByTestId("amount").value = validBill.amount;
//       screen.getByTestId("vat").value = validBill.vat;
//       screen.getByTestId("pct").value = validBill.pct;
//       screen.getByTestId("commentary").value = validBill.commentary;

//       newBill.fileName = validBill.fileName;
//       newBill.fileUrl = validBill.fileUrl;

//       newBill.updateBill = jest.fn();
//       const handleSubmit = jest.fn((e) => newBill.handleSubmit(e));

//       const form = screen.getByTestId("form-new-bill");
//       form.addEventListener("submit", handleSubmit);
//       fireEvent.submit(form);

//       expect(handleSubmit).toHaveBeenCalled();
//       expect(newBill.updateBill).toHaveBeenCalled();
//     });
//     test("fetches error from an API and fails with 500 error", async () => {
//       jest.spyOn(mockStore, "bills");
//       jest.spyOn(console, "error").mockImplementation(() => {}); // Prevent Console.error jest error

//       Object.defineProperty(window, "localStorage", {
//         value: localStorageMock,
//       });
//       Object.defineProperty(window, "location", {
//         value: { hash: ROUTES_PATH["NewBill"] },
//       });

//       window.localStorage.setItem("user", JSON.stringify({ type: "Employee" }));
//       const root = document.createElement("div");
//       root.setAttribute("id", "root");
//       document.body.append(root);
//       router();

//       const onNavigate = (pathname) => {
//         document.body.innerHTML = ROUTES({ pathname });
//       };

//       mockStore.bills.mockImplementationOnce(() => {
//         return {
//           update: () => {
//             return Promise.reject(new Error("Erreur 500"));
//           },
//         };
//       });
//       const newBill = new NewBill({
//         document,
//         onNavigate,
//         store: mockStore,
//         localStorage: window.localStorage,
//       });

//       // Submit form
//       const form = screen.getAllByTestId("form-new-bill");
//       const handleSubmit = jest.fn((e) => newBill.handleSubmit(e));
//       form.addEventListener("submit", handleSubmit);
//       fireEvent.submit(form);
//       await new Promise(process.nextTick);
//       expect(console.error).toBeCalled();
//     });
//   });
// });

// ---------- V2 ---------------

//Test d'intégration POST
describe("Given I am a user connected as Employee", () => {
  //Etant donné que je suis un utilisateur connecté en tant que Salarié
  describe("When I submit the form completed", () => {
    //Lorsque je soumets le formulaire rempli
    // test("Then the bill is created", async () => {
    //   //Ensuite, la facture est créée

    //   const html = NewBillUI();
    //   document.body.innerHTML = html;

    //   const onNavigate = (pathname) => {
    //     document.body.innerHTML = ROUTES({ pathname });
    //   };
    //   //SIMILATION DE LA CONNECTION DE L EMPLOYEE
    //   Object.defineProperty(window, "localStorage", {
    //     value: localStorageMock,
    //   });
    //   window.localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       type: "Employee",
    //       email: "john@doe.com",
    //     })
    //   );
    //   //SIMULATION DE CREATION DE LA PAGE DE FACTURE
    //   const newBill = new NewBill({
    //     document,
    //     onNavigate,
    //     store: null,
    //     localStorage: window.localStorage,
    //   });

    //   const validBill = {
    //     type: "Vol",
    //     name: "Paris Marrakech",
    //     date: "2022-10-25",
    //     amount: 400,
    //     vat: 70,
    //     pct: 30,
    //     commentary: "Commentary",
    //     fileUrl: "../img/0.jpg",
    //     fileName: "test.jpg",
    //     status: "pending",
    //   };

    //   // Charger les valeurs dans les champs
    //   screen.getByTestId("expense-type").value = validBill.type;
    //   screen.getByTestId("expense-name").value = validBill.name;
    //   screen.getByTestId("datepicker").value = validBill.date;
    //   screen.getByTestId("amount").value = validBill.amount;
    //   screen.getByTestId("vat").value = validBill.vat;
    //   screen.getByTestId("pct").value = validBill.pct;
    //   screen.getByTestId("commentary").value = validBill.commentary;

    //   newBill.fileName = validBill.fileName;
    //   newBill.fileUrl = validBill.fileUrl;

    //   newBill.updateBill = jest.fn(); //SIMULATION DE  CLICK
    //   const handleSubmit = jest.fn((e) => newBill.handleSubmit(e)); //ENVOI DU FORMULAIRE

    //   const form = screen.getByTestId("form-new-bill");
    //   form.addEventListener("submit", handleSubmit);
    //   fireEvent.submit(form);

    //   expect(handleSubmit).toHaveBeenCalled(); //VERIFICATION DE L ENVOI DU FORMULAIRE
    //   expect(newBill.updateBill).toHaveBeenCalled(); //VERIFIE SI LE FORMULAIRE EST ENVOYER DANS LE STORE
    // });

    //test erreur 500
    test("fetches error from an API and fails with 500 error", async () => {
      //récupère l'erreur d'une API et échoue avec l'erreur 500
      jest.spyOn(mockStore, "bills");
      jest.spyOn(console, "error").mockImplementation(() => {}); // Prevent Console.error jest error

      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      Object.defineProperty(window, "location", {
        value: { hash: ROUTES_PATH["NewBill"] },
      });

      window.localStorage.setItem("user", JSON.stringify({ type: "Employee" }));
      document.body.innerHTML = `<div id="root"></div>`;
      router();

      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      };

      mockStore.bills.mockImplementationOnce(() => {
        return {
          update: () => {
            return Promise.reject(new Error("Erreur 500"));
          },
        };
      });
      const newBill = new NewBill({
        document,
        onNavigate,
        store: mockStore,
        localStorage: window.localStorage,
      });

      // Soumettre le formulaire
      const form = screen.getByTestId("form-new-bill");
      const handleSubmit = jest.fn((e) => newBill.handleSubmit(e));
      form.addEventListener("submit", handleSubmit);
      fireEvent.submit(form);
      await new Promise(process.nextTick);
      expect(console.error).toBeCalled();
    });
  });
});
