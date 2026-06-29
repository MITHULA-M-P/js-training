type Identifiable = {
    readonly id: string;
};

type Timestamped = {
    createdAt: Date;
    updatedAt: Date;
};

type SoftDeletable = {
    deletedAt?: Date;
    isDeleted: boolean;
};

type BaseRecord = Identifiable & Timestamped;

type UserRecord = BaseRecord & {
    name: string;
    email: string;
};

type AuditedUserRecord = UserRecord & SoftDeletable;

function isDeleted(record: SoftDeletable): boolean {
    return record.isDeleted;
}

const base: BaseRecord = {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date()
};

const user: UserRecord = {
    ...base,
    name: "Alice",
    email: "alice@gmail.com"
};

const audited: AuditedUserRecord = {
    ...user,
    isDeleted: false
};

console.log(isDeleted(audited));

/*
type A={value:string}
type B={value:number}
type C=A&B

value becomes never.

No object can satisfy both string and number simultaneously.
*/