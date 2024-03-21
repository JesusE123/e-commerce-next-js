'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useAppSelector } from '@/hooks/store'
import { Button } from '@/components/ui/button'
import { products } from '@/modules/Products/models/Products'
import useDetailProducts from './useDetailProducts'
import { Modal } from '@/components/Modal/Modal'


   
const DetailProducts = () => {
 const {state,total, setIsShowDialog, isShowDialog} = useDetailProducts() 

  if (state.length === 0){
    return <p className='text-white'>your cart is empty</p>
  }
  return (
    <div>
        <Table>
      <TableCaption>Your list of products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Price</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {state.map((product:products) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">${product.price}</TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.price * product.quantity}</TableCell>
            
          </TableRow>
          
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">${total}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

    <Button onClick={() => setIsShowDialog(true)} variant={'secondary'}>Purchase</Button>
    <Modal 
    isShowDialog={isShowDialog}
    setIsShowDialog={setIsShowDialog}     
    />
    </div>
  )
}

export default DetailProducts