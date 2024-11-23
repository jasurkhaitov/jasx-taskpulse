import { telegramBotAPI } from '@/util/data'
import { useUser } from '@clerk/clerk-react'
import { useState, FormEvent } from 'react';
import { FaSpinner, FaCheck, FaTimes } from 'react-icons/fa';

export default function FormRequest() {
  const [name, setName] = useState<string>('');
  const [recommendation, setRecommendation] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Submit');
  const [buttonColor, setButtonColor] = useState<string>('bg-indigo-500 text-white');
  const [buttonIcon, setButtonIcon] = useState<JSX.Element | null>(null);

  const { user } = useUser();

  const disableText = 'Sending message is not available';

  function cleanDateString(dateStr: string): string {
    return dateStr.replace(/\sGMT[^\(]+\([^\)]+\)$/, '');
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    if (telegramBotAPI.disableForm) return;
  
    setIsSending(true);
    setButtonText('Sending...');
    setButtonColor('bg-indigo-500 text-white');
    setButtonIcon(<FaSpinner className="animate-spin text-white text-md" />);
  
    const newDate = new Date();
  
    const createdAt = user?.createdAt ? cleanDateString(user.createdAt.toString()) : 'N/A';
    const updatedAt = user?.updatedAt ? cleanDateString(user.updatedAt.toString()) : 'N/A';
    const sendedAt = newDate ? cleanDateString(newDate.toString()) : 'N/A';
  
    const message = `<b>New Form Submission 💬</b> \n\n<b>Full Name:</b> ${user?.fullName ?? ''} \n\n<b>Form Name:</b> ${name} \n\n<b>Message:</b> ${recommendation} \n\n<b>Email:</b> ${user?.primaryEmailAddress?.emailAddress ?? ''} \n\n<b>Created at:</b> ${createdAt} \n\n<b>Entered at:</b> ${updatedAt} \n\n<b>Send:</b> ${sendedAt}`;
  
    try {
      const responseMessage = await fetch(`https://api.telegram.org/bot${telegramBotAPI.botToken}/sendPhoto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramBotAPI.chatId,
          caption: message,
          parse_mode: 'html',
          photo: user?.imageUrl,
        }),
      });
  
      if (responseMessage.ok) {
        console.log('Message and photo sent to Telegram successfully!');
        setButtonText('Done');
        setButtonColor('bg-green-700 text-white');
        setButtonIcon(<FaCheck className="text-white text-md" />);
  
        setName('');
        setRecommendation('');
      } else {
        console.error('Failed to send message or photo to Telegram.');
        setButtonText('Something went wrong');
        setButtonColor('bg-red-600 text-white');
        setButtonIcon(<FaTimes className="text-white text-md" />);
      }
    } catch (error) {
      console.error('Error sending message or photo:', error);
      setButtonText('Something went wrong');
      setButtonColor('bg-red-600 text-white');
      setButtonIcon(<FaTimes className="text-white text-md" />);
    } finally {
      setIsSending(false);
  
      setTimeout(() => {
        setButtonText('Submit');
        setButtonColor('bg-indigo-500 text-white');
        setButtonIcon(null);
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-transparent">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${
            telegramBotAPI.disableForm
              ? 'text-red-600 border-red-600 placeholder-red-600 cursor-not-allowed'
              : 'focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 cursor-text'
          } w-full px-4 py-2 mb-2 text-sm border rounded-md focus:outline-none bg-transparent`}
          placeholder={`${telegramBotAPI.disableForm ? disableText : 'Enter your name...'}`}
          required
          readOnly={telegramBotAPI.disableForm || isSending}
        />

        <textarea
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
          className={`${
            telegramBotAPI.disableForm
              ? 'text-red-600 border-red-600 placeholder-red-600 cursor-not-allowed'
              : 'focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 cursor-text'
          } w-full px-4 resize-none py-2 mb-3 text-sm border rounded-md focus:outline-none bg-transparent`}
          rows={4}
          placeholder={`${telegramBotAPI.disableForm ? disableText : 'Write your question and suggestion...'}`}
          readOnly={telegramBotAPI.disableForm || isSending}
        />

        <button
          type="submit"
          className={`${buttonColor} ${telegramBotAPI.disableForm || isSending ? 'cursor-not-allowed' : ''} w-full py-3 rounded-md flex items-center text-md justify-center gap-2`}
          disabled={telegramBotAPI.disableForm || isSending}
        >
          {buttonIcon}
          {buttonText}
        </button>
      </form>
    </div>
  );
}
