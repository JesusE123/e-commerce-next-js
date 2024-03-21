import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
  import { RocketIcon } from "@radix-ui/react-icons"
  export function AlertDemo() {
    return (
      <Alert className="text-center fixed bottom-0 left-0 right-0 bg-gray-200 border-green-500 p-4">
       
        <AlertTitle className="font-bold">Your product has been added</AlertTitle>
        
        <AlertDescription className="flex justify-center">
        You can view it in the cart
        <RocketIcon className="h-4 w-4 text-black" />
        </AlertDescription>
      </Alert>
    )
  }