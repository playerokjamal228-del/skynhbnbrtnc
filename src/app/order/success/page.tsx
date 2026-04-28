import { OrderStatusPage } from "@/components/order/order-status-page";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderSuccessPage() {
  return <OrderStatusPage status="success" />;
}
