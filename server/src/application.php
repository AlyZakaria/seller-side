<?php

namespace Src;

use Config\Env;
use Src\Http\{Request, Response, Route};
use Src\Database\MySqlManager;

class Application{

    protected Request $request;
    protected Response $response;
    protected Route $route;

    public function __construct(){
        $this->request = new Request();
        $this->response = new Response();
        $this->route =new Route($this->request, $this->response);
    }
    public function run(){
        Env::establish();
        MysqlManager::establish();
        // MysqlManager::disconnect();
        $this->route->resolve();


    }
}