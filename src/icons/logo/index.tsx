

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <img 
        src="/images/logo_light.svg" 
        alt="OpenGridLabs Logo" 
        width={50} 
        height={50} 
        className="object-contain"
      />
      
      <div className="flex flex-col justify-center items-start">
        <span className="text-xl font-bold leading-none">
          OpenGridLabs
        </span>
      </div>
    </div>
  );
}
