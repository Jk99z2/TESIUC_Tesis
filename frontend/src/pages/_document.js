import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charSet="UTF-8" />
                    <link
                        href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                        rel="stylesheet"
                        
                    />
                    <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"></link>
                </Head>
                <header className="antialiased">

                </header>
                <body className="antialiased">
                    
                    <Main />
                    <NextScript />
                </body>
                <footer className="antialiased">

                </footer>
            </Html>
        )
    }
}

export default MyDocument
