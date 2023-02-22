export interface IGuest {
    fullName?: string,
    email?: string
}

export interface Booking {
    dates?: Date[]|null,
   startDate:string,
   endDate: string,
   mainGuest?: IGuest,
   guests?:IGuest[]
}
