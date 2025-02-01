interface IJob {
    name:string,
    payload:Record<string,unknown>,
    handle:() => void,
    failed:() => void
}

export default IJob;