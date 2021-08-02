export interface JobData {
    readonly jobId: string;
    readonly jobName: string;
    readonly company: string;
    readonly duration: string;
    readonly description:string[];//bullet point job descriptions
    readonly picture?:string;

}