const Footer = () => (
    <div className="flex flex-col justify-center text-xs sm:text-base items-center bg-light-c dark:bg-dark-c p-4 text-center h-16 sm:h-20 shadow-md">
        <div className="flex sm:text-sm">
            <a className="" href="https://github.com/iamwesofph/top-wesbook" target="_blank">
                <span className="mr-6">© Wes Q. 2023</span>
            </a>
            <div>
                <span>Icons by </span>
                <a className="underline hover:text-green-500 transition-colors" href="https://icons8.com" target="_blank">
                    Icons8
                </a>
            </div>
        </div>
        <div className="flex relative items-center sm:text-base group">
            <a className="text-primary dark:text-primaryDark underline" href="https://github.com/iamwesofph/top-wesbook" target="_blank">
                <span className="text-sm">https://github.com/iamwesofph/top-wesbook</span>
            </a>
        </div>
    </div>
);

export default Footer;
