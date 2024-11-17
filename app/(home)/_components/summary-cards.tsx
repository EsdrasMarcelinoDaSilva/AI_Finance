import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  investimentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  investimentsTotal,
  depositsTotal,
  expensesTotal,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-3">
      {/* CARD 1 */}
      <SummaryCard
        title="Saldo"
        amount={balance}
        icon={<WalletIcon size={16} />}
        size="lg"
      />
      {/* outros cards */}
      <div className="grid grid-cols-3 gap-3 ">
        <SummaryCard
          title="Investido"
          amount={investimentsTotal}
          icon={<PiggyBankIcon size={16} />}
        />
        <SummaryCard
          title="Receita"
          amount={depositsTotal}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
        />
        <SummaryCard
          title="Despesas"
          amount={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
