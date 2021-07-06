import { Helmet } from "react-helmet";
import { MetaData } from "../data/metas-data";

const HeadItem = () => {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{MetaData.MetaTitle}</title>
                <meta name="description" content={MetaData.MetaDescription} ></meta>
                <meta name="keywords" content={MetaData.MetaKeywords} ></meta>
                <meta name="author" content={MetaData.MetaAuthor} ></meta>
        </Helmet>
    </>
    )
};

export default HeadItem;

