export interface Booking {
  id: string;
  date: string;
  ticketType: string;
  ticketName: string;
  quantity: number;
  totalPrice: number;
  time?: string;
  adults?: number;
  childrenCount?: number;
  createdAt: string;
}

export const bookingStore = {
  getBookings(): Booking[] {
    if (typeof window === "undefined") return [];

    const raw = localStorage.getItem("skytree_bookings");
    if (!raw) return [];

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      localStorage.removeItem("skytree_bookings");
      return [];
    }
  },

  addBooking(booking: Omit<Booking, "createdAt">) {
    if (typeof window === "undefined") return;

    const bookings = this.getBookings();
    // Keep only operational booking metadata in browser storage.
    bookings.push({ ...booking, createdAt: new Date().toISOString() });
    localStorage.setItem("skytree_bookings", JSON.stringify(bookings));
  },

  clearBookings() {
    if (typeof window === "undefined") return;
    localStorage.removeItem("skytree_bookings");
  },
};
