
export interface ITodos {
    id :      string   ;
    title:    string;
    body:     string | null;
    creatAt ?: Date;
    completed ?: boolean;
}