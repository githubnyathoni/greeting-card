import Button from '@/components/Button';
import { toPng } from 'html-to-image';
import { useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';

interface Errors {
  image?: string;
  dear?: string;
  message?: string;
  from?: string;
}

function GreetingCardForm() {
  const [image, setImage] = useState<string | null>(null);
  const [dear, setDear] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const [messageLine, setMessageLine] = useState({
    line_1: '',
    line_2: '',
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const validateForm = (): Errors => {
    const newErrors: Errors = {};

    if (!image) newErrors.image = 'Please upload a greeting card image.';
    if (!dear.trim()) newErrors.dear = 'Dear field is required.';
    if (!message.trim()) newErrors.message = 'Message field is required.';
    if (!from.trim()) newErrors.from = 'From field is required.';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      if (cardRef.current) {
        const dataUrl = await toPng(cardRef.current);
        saveAs(dataUrl, 'greeting-card.png');
      }
    }
  };

  const splitMessages = (message: string) => {
    const maxLineLength = 27;
    const line_1 = message.slice(0, maxLineLength);
    const line_2 = message.slice(maxLineLength);

    setMessageLine({
      line_1,
      line_2,
    });
  };

  useEffect(() => {
    splitMessages(message);
  }, [message]);

  return (
    <main className='flex flex-col'>
      {image && (
        <div className='p-6'>
          <div
            ref={cardRef}
            className='relative w-full aspect-square'
            style={{
              background: '#f5f5f5',
            }}
          >
            <svg
              className='w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='xMidYMid slice'
            >
              {image && (
                <image
                  href={image}
                  x='0'
                  y='0'
                  width='100'
                  height='100'
                />
              )}

              <text
                x='46%'
                y='33%'
                textAnchor='right'
                fontSize={6}
                fill='rgb(69 26 3)'
                className='font-bold font-mutually-beneficial'
              >
                {dear}
              </text>

              <text
                x='30%'
                y='42%'
                textAnchor='right'
                fill='rgb(69 26 3)'
                fontSize={6}
                className='font-bold font-mutually-beneficial'
              >
                {messageLine.line_1}
              </text>

              <text
                x='30%'
                y='50%'
                textAnchor='right'
                fill='rgb(69 26 3)'
                fontSize={6}
                className='font-bold font-mutually-beneficial'
              >
                {messageLine.line_2}
              </text>

              <text
                x='42%'
                y='59%'
                textAnchor='right'
                fill='rgb(69 26 3)'
                fontSize={6}
                className='font-bold font-mutually-beneficial'
              >
                {from}
              </text>
            </svg>
            {/* <img
              src={image}
              alt='Greeting Card'
              className='absolute inset-0 w-full h-full object-cover'
            /> */}
            {/* <div
              className='absolute
              top-[25%] md:top-[29%] left-[46%] w-[30%]
              text-md min-[400px]:text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-5xl
              font-bold text-amber-950 font-mutually-beneficial'
            >
              {dear}
            </div>
            <div className='absolute top-[40%] left-[10%] w-[80%] text-sm text-white text-center drop-shadow-md'>
              {message}
            </div>
            <div className='absolute bottom-[10%] left-[10%] w-[80%] text-xs md:text-sm font-medium text-white text-right drop-shadow-md'>
              {from}
            </div> */}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='p-6'>
          <div>
            <label>File Upload</label>
            <label
              htmlFor='uploadFile1'
              className='bg-white text-gray-500 font-semibold text-base rounded w-full h-40 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-sans my-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-11 mb-2 fill-gray-500'
                viewBox='0 0 32 32'
              >
                <path
                  d='M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z'
                  data-original='#000000'
                />
                <path
                  d='M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z'
                  data-original='#000000'
                />
              </svg>
              Browse File
              <input
                type='file'
                id='uploadFile1'
                className='hidden'
                accept='image/*'
                onChange={handleImageUpload}
              />
              <p className='text-xs font-medium text-gray-400 mt-2'>
                Drag and drop file here
              </p>
            </label>
            {errors.image && (
              <p className='text-red-500 text-xs'>{errors.image}</p>
            )}
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <label>Dear</label>
            <input
              type='text'
              className='border rounded p-2'
              value={dear}
              onChange={(e) => setDear(e.target.value)}
              maxLength={14}
            />
            {errors.dear && (
              <p className='text-red-500 text-xs'>{errors.dear}</p>
            )}
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <label>Message</label>
            <textarea
              className='border rounded p-2'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={54}
            />
            {errors.message && (
              <p className='text-red-500 text-xs'>{errors.message}</p>
            )}
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <label>From</label>
            <input
              type='text'
              className='border rounded p-2'
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              maxLength={15}
            />
            {errors.from && (
              <p className='text-red-500 text-xs'>{errors.from}</p>
            )}
          </div>
        </div>

        <footer className='flex justify-center items-center p-6 border-t'>
          <Button
            className='bg-green-600 text-white'
            label='Download'
          />
        </footer>
      </form>
    </main>
  );
}

export default GreetingCardForm;
