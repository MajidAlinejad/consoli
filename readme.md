interface Window {

    consoli: Iconsoli<"permissions">;

}

const c = new consoli({
defaultDeveloperMode: ["SUCCESS"],
password: "",
onMessageCallback: (type, ...message) => console.log(type, message),
tags: [{ displayName: "permissions", color: "#9f00a1" }],
});
window.consoli = c;

consoli.tags?.permissions("hi im permissions");
