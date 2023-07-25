interface Window {

    consoler: IConsoler<"permissions">;

}

const c = new Consoler({
defaultDeveloperMode: ["SUCCESS"],
password: "",
tags: [{ displayName: "permissions", color: "#9f00a1" }],
});
window.consoler = c;

consoler.tags?.permissions("hi im permissions");
