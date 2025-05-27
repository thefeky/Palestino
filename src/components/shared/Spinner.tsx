function Spinner() {
  return (
    <div className="w-full flex justify-center py-12">
      <div
        className="animate-spin rounded-full border-4 border-t-transparent border-red-500 
                   h-20 w-20 md:h-30 md:w-30 xl:h-40 xl:w-40"
      />
    </div>
  );
}

export default Spinner;
