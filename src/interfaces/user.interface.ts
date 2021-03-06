export default interface User {
    id: string;
    first_name: string;
    last_name: string;
    gender: string;
    dob: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    status: string;
    _links: UserLinks
}

export interface UserLinks {
    self: Link;
    edit: Link;
    avatar: Link;
}

export interface Link {
    href: string;
}