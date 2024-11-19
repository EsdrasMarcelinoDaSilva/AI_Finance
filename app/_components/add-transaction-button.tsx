// "use client";

// import { useState } from "react";
// import UpsertTransactionDialog from "./upsert-transaction-dialog";
// import { Button } from "./ui/button";
// import { ArrowDownUpIcon } from "lucide-react";
// import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
// import { TooltipContent } from "@radix-ui/react-tooltip";

// interface AddTransactionButtonProps {
//   userCanAddTransaction?: boolean;
// }

// // Composition pattern
// const AddTransactionButton = ({userCanAddTransaction}: AddTransactionButtonProps) => {
//   const [dialogOpen, setDialogOpen] = useState(false);

//   return (
//     <>
//       <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="text-muted-foreground"
//             onClick={() => setDialogOpen(true)}
//             //disabled={!userCanAddTransaction}
//           >
//             <ArrowDownUpIcon />
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent>
//           {userCanAddTransaction && "Você atingiu o limite de transações. Atualize seu plano para criar transações ilimitadas."}
//         </TooltipContent>
//       </Tooltip>
//       </TooltipProvider>
//       <UpsertTransactionDialog isOpen={dialogOpen} setIsOpen={setDialogOpen} />
//     </>
//   );
// };

// export default AddTransactionButton;
"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransaction}
            >
              Adicionar transação
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {!userCanAddTransaction &&
              "Você atingiu o limite de transações. Atualize seu plano para criar transações ilimitadas."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
