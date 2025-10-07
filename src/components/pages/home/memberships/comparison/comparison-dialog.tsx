'use client'


import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose
} from '@/components/shared/dialog'



export const ComparisonDialog = ({
    open,
    onOpenChange
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) => {

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='max-w-5xl max-h-[90vh] p-6'>
                <DialogHeader className='relative mb-6'>
                    <DialogTitle className='text-2xl'>Сравнить абонементы</DialogTitle>
                    <DialogClose />
                </DialogHeader>


            </DialogContent>
        </Dialog>
    )
}