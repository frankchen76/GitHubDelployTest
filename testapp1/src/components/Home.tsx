import * as React from "react";
import { useState } from "react";
import { JsonOutput } from "./JsonOutput";
import { PrimaryButton, Spinner, Stack } from "@fluentui/react";

export const Home = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [jsonObj, setJsonObj] = useState<object>(null);

    const _getMyInfoHandler = async (): Promise<void> => {
        setLoading(true);
        setInterval(() => {
            setLoading(false);
            setJsonObj({ result: "success" });

        }, 2000);

    };
    return (
        <div className="ms-Grid">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-bgColor-white" >
                    <h2>Home testapp1-1</h2>
                </div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                    this is home page.
                </div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                    <Stack horizontal horizontalAlign="space-around">
                        <PrimaryButton text="Get My Info" onClick={_getMyInfoHandler} />
                    </Stack>
                </div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                    {
                        loading ? <Spinner />
                            :
                            <JsonOutput jsonObj={jsonObj} />
                    }
                </div>
            </div>
        </div>

    );

}

