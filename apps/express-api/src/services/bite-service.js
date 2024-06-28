module.exports = {
  getBites: () => {
    return [{ id: "coming soon", details: "sooner" }];
  },
  addBite: (biteObj) => {
    throw new Error("Not done yet - please hold on");
  },
};
