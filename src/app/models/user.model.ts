export class User {
    constructor(
        public name: string,
        public email: string,
        public password?: string,
        public google?: boolean,
        public lastName?: string,
        public img?: string,
        public uid?: string,
    ){}
}