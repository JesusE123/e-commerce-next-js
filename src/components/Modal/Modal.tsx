import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
   
  export function Modal({isShowDialog, setIsShowDialog}:any) {
    return (
      <AlertDialog open={isShowDialog}>
        <AlertDialogTrigger asChild>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>This was a demo</AlertDialogTitle>
            <AlertDialogDescription>
            Thank you for coming here and trying the trial application ;)
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            
            <AlertDialogAction onClick={() => setIsShowDialog(false)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }