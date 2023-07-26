interface Window {

    consoler: IConsoler<"permissions">;

}

const c = new Consoler({
defaultDeveloperMode: ["SUCCESS"],
password: "",
onMessageCallback: (type, ...message) => console.log(type, message),
tags: [{ displayName: "permissions", color: "#9f00a1" }],
});
window.consoler = c;

consoler.tags?.permissions("hi im permissions");
