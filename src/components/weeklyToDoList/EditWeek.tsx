import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { toast } from '@/hooks/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  title: z
    .string()
    .min(5, { message: 'Title must be at least 5 characters long' }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' }),
})

export default function EditWeek({ title, date, desc, onClose }: { title: string; date: string; desc: string, onClose:() => void }) {
  const defaultValues = {
    dob: date ? new Date(date) : undefined,
    title,
    description: desc,
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })

  function handleSubmit(data: z.infer<typeof FormSchema>) {
    const trimmedData = {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
    };
  
    const hasChanges = Object.keys(defaultValues).some((key) => {
      const defaultValue = defaultValues[key as keyof typeof defaultValues];
      const newValue = trimmedData[key as keyof typeof trimmedData];
  
      return JSON.stringify(defaultValue) !== JSON.stringify(newValue);
    });
  
    if (!hasChanges) {
      toast({
        variant: 'destructive',
        description: 'You must modify the form before submitting.',
      });
      return;
    }
  
    toast({
      description: 'Your week has been changed successfully.',
    });
  
    form.reset(trimmedData);

    onClose();
  }
  

  return (
    <Form {...form}>
      <form className="space-y-5 mt-5">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>First day</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[300px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick your week's starting day</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date('2100-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the title for your week" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your plans for the week"
                  {...field}
                  rows={5}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" variant={'default'} onClick={form.handleSubmit(handleSubmit)}>
          Submit
        </Button>
      </form>
    </Form>
  )
}
