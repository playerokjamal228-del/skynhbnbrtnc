import { OrderStatusPage } from "@/components/order/order-status-page";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderFailedPage() {
  return <OrderStatusPage status="failed" />;
}
