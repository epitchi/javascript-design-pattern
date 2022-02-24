const Singleton = (function(){
    function ProcessManager(){
        this.numProcess = 0
    }

    let pManager

    function createProcessManger(){
        pManager = new ProcessManager()
        return pManager
    }

    return {
        getProcessManager: () => {
            if(!pManager)
                pManager = createProcessManger()
        }
    }
})()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log(processManager === processManager2) // * => True