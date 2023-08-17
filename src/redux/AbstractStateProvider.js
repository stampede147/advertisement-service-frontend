

class AbstractStateProvider {


    process(actionDetails) {
        console.log("unsupported operation");
    }

    supports(stateType) {
        console.log("unsupported operation");
    }
}

export default AbstractStateProvider