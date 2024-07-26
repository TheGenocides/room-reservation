type headMajor = "Informatika" | "DKV" | "Bangunan" | "TITL" | "Mesin"
type Major = "SIJA" | "RPL" | "TKJ"
type borrowingStatus = "IN_PROGRESS" | "BORROWED" | "EXPIRED" | "RETURNED"
type roomOwner = Major | "Administrator"
type borrowerType = "student" | "teacher" | "other"

interface IRoom {
    id: number;
    name: string;
    roomOwner: roomOwner;
    isLabkom: boolean;
}

interface IBorrower {
    id: number;
    name: string;
    email: string;
    type: borrowerType
}

interface IStudent {
    NISN: number;
    headMajor: headMajor;
    major: Major;
}

interface IborrowingOrder{
    id: number;
    borrowerId: number;
    roomId: number;
    note: string;
    borrowDate: Date | null;
    returnDate: Date | null;
    dueDate: Date;
    isExpired: boolean;
    status: borrowingStatus;
}