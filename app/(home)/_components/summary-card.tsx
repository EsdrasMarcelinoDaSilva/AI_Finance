import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";

interface SummaryCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const SummaryCard = ({
  title,
  amount,
  icon,
  size = "sm",
}: SummaryCardProps) => {
  return (
    <Card className={`${size === "lg" ? "bg-white bg-opacity-5" : ""}`}>
      {/* <Card> */}
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "sm" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`${size === "sm" ? "text-2xl" : "text-4xl"} font-bold`}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
        {size === "lg" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
